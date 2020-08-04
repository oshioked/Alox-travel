class Product{
    constructor(id, name, imageUrl, category, price, description, recommended, dateAdded){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.description = description;
        this.recommended = recommended;
        this.dateAdded = dateAdded;
    }
}

export default Product;