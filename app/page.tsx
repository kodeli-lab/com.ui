import ActionBar from './components/action-bar'
import Card from './components/card'
import SubscribeCard from './components/subscribe-card'
import { featuredProductList, productlist } from './data/product-list'

export default function Home() {
  return (
    <>
      <main>
        <ActionBar />
        <div className="card-list">
          {featuredProductList &&
            featuredProductList.map((product) => (
              <Card
                id={product.id}
                title={product.title}
                likes={product.likes}
                rating={product.rating}
                desc={product.desc}
                image_url={product.image_url as string}
              />
            ))}
          <SubscribeCard />
          {productlist &&
            productlist.map((product) => (
              <Card
                id={product.id}
                title={product.title}
                likes={product.likes}
                rating={product.rating}
                desc={product.desc}
                image_url={product.image_url as string}
              />
            ))}
        </div>
      </main>
    </>
  )
}
