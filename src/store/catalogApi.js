import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiUrl from '../api/Urls';

export const catalogApi = createApi({
	reducerPath: 'catalogApi',
	baseQuery: fetchBaseQuery({ baseUrl: apiUrl.urlPart }),
	endpoints: (build) => ({
		getProducts: build.query({
			query: ({queryType = 'catalog', queryKey = ''}) => {
				switch (queryType) {
					case 'search':
						return `catalog?${queryKey && `search=${queryKey}`}`;

					case 'category':
						return `catalog?${queryKey && `catid=${queryKey}`}`;
						
					case 'catalog':
					default:
						return 'catalog';
				}
			},
		}),
		getCategories: build.query({
			query: () => 'category',
		}),
		getCategoriesById: build.query({
			query: (id) => `category/${id}`,
		})
	})
});


export const { useGetProductsQuery, useGetCategoriesQuery, useGetCategoriesByIdQuery } = catalogApi;