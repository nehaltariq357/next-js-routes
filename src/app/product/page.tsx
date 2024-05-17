import React from "react";

import Link from "next/link";

async function Product() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
  const response = await fetchData.json()
  console.log(response)
  return (
    <>
      <h1>product page here</h1>

      <ol>
        {/* <li>
          <Link href="product/items1">item1</Link>
        </li>
        <li>
          <Link href="product/items2">item2</Link>
        </li>
        <li>
          <Link href="product/items3">item3</Link>
        </li> */}
        <li>
          
        </li>
      </ol>
    </>
  );
}

export default Product;
