export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Categories: <input name="categories" type="text" />
          {/* Need to create a dropdown here? */}
        </div>
        <div>
          Discounted?: <input name="discounted?" type="text" />
          {/* yes or no */}
        </div>
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}
