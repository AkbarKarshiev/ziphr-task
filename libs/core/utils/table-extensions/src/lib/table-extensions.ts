import { TableResponseModel, TableState } from "@ziphr-task/core/table/common";

export function baseFilter<T extends Record<string, string | number | object>>(
  entities: T[],
  requestObj: TableState
): TableResponseModel<T> {
  // Filtration
  let entitiesResult = filterArray<T>(entities, requestObj);

  // Search
  entitiesResult = searchInArray<T>(entitiesResult, requestObj.searchTerm);

  // Sorting
  // start
  if (requestObj.sorting.column) {
    entitiesResult = sortArray<T>(entitiesResult, requestObj.sorting.column, requestObj.sorting.direction);
  }
  // end

  // Paginator
  // start
  const totalCount = entitiesResult.length;
  const startPosition = (requestObj.paginator.page - 1) * requestObj.paginator.pageSize;
  const endPosition = startPosition + requestObj.paginator.pageSize;
  entitiesResult = entitiesResult.slice(startPosition, endPosition);
  // end

  return {
    items: entitiesResult,
    total: totalCount
  };
}

export function sortArray<T extends Record<string, string | number | object>>(
  incomingArray: T[],
  sortField: string = '',
  sortOrder: string = 'asc'
): T[] {
  if (!sortField) {
    return incomingArray;
  }

  let result: T[] = [];
  result = incomingArray.sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return sortOrder === 'asc' ? -1 : 1;
    }

    if (a[sortField] > b[sortField]) {
      return sortOrder === 'asc' ? 1 : -1;
    }

    return 0;
  });
  return result;
}

export function filterArray<T extends Record<string, string | number | object>>(
  incomingArray: T[],
  requestObj: TableState
): T[] {
  if (!requestObj || !(Object.keys(requestObj.filter).length > 0)) {
    return incomingArray;
  }

  let result: T[] = incomingArray;
  const filtrationFields = Object.keys(requestObj.filter);
  filtrationFields.forEach((keyName: string) => {
    // tslint:disable-next-line:triple-equals
    result = result.filter(el => el[keyName] == requestObj.filter[keyName]);
  });
  return result;
}

export function searchInArray<T extends Record<string, string | number | object>>(
  incomingArray: T[],
  searchTerm: string = ''
): T[] {
  if (!searchTerm) {
    return incomingArray;
  }

  const acceptableForSearchTypes: Record<string, number> = { number: 1, string: 2 };
  const result = incomingArray.filter(row => {
    let termIsFoundInRow = false;
    const keys = Object.keys(row).filter(keyName => acceptableForSearchTypes[typeof row[keyName]] && row[keyName]);
    for (const keyName of keys) {
      if (row[keyName].toString().toLowerCase().indexOf(searchTerm) > -1) {
        termIsFoundInRow = true;
        break;
      }
    }
    return termIsFoundInRow;
  });
  return result;
}
