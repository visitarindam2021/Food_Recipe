const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

export const fetcher = async (parameter: string) => {
  try {
    const response = await fetch(`${baseURL}${parameter}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchWithAreas = async (url: string) => {
  try {
    return fetcher('list.php?a=list')
      .then(areas => {
        const promises = areas.meals.map((area: any) => {
          return fetcher(`${url}=${area.strArea}`)
            .then((recipeListResponse: any) => recipeListResponse.meals);
        });
        return Promise.all(promises);
      })
      .then(recipeLists => {
        return recipeLists.flat();
      });
  } catch (error) {
    throw error;
  }
}; 