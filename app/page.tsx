import ActionBar from './components/action-bar'
import Card from './components/card'
import SubscribeCard from './components/subscribe-card'

export default function Home() {
  return (
    <>
      <main>
        <ActionBar />
        <div className="card-list">
          <Card />
          <Card />
          <SubscribeCard />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  )
}
