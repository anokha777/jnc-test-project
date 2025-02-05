export type CategoryDataType= {
    id: string,
    name: string 
}

export type ProductDataType= {
    id: string,
    name: string 
    imageUrl: string,
    categoryId: string
}

export type StoredCategoryData= {
    categoryId: string, 
    categoryName: string
}
