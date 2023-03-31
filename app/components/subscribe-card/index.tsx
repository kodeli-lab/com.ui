import './subscribe-card.css'

const SubscribeCard = () => {
  return (
    <>
      <div className="subs-card">
        <img src="/images/OpenAI.png" alt="" />
        <h5 className="title">Discover useful new AI tools</h5>
        <p className="desc">
          Join 90,000+ AI enthusiasts getting weekly updates on new tools
        </p>
        <form action="">
          <input type="email" name="emai" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
        <p>Unsubscribe at any time</p>
        <a href="/">
          Read past issues{' '}
          <span>
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="hsl(198, 85%, 49%)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l6-6-6-6"
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  )
}

export default SubscribeCard
