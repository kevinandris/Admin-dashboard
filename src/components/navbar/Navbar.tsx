import './navbar.scss'

const navbar = () => {
  return (
    <div className='navbar'>

        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>kevinadmin</span>
        </div>

        <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />

          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>

          <div className="user">
            <img src="data:image/jpeg;base64,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" alt="" />
            <span>Kevin</span>
          </div>

          <img src="/settings.svg" alt="" className="icon" />
        </div>

    </div>
  )
}

export default navbar