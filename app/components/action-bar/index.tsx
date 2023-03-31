import './action-bar.css'

const ActionBar = () => {
  return (
    <>
      <div className="nav">
        <div className="action-bar">
          <div className="filter-action">
            <span>Filter</span>
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 971.986 971.986"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3
  	c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873
  	c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"
                />
              </g>
            </svg>
          </div>
          <div className="foward-arrow">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 10H2m0 0l7-7m-7 7l7 7"
              />
            </svg>
          </div>
          <div className="badge-list">
            <div className="badge-cicle">3D</div>
            <div className="badge-cicle">Art</div>
            <div className="badge-cicle">Audio Editing</div>
            <div className="badge-cicle">Avatars</div>
            <div className="badge-cicle">Code Assistance</div>
            <div className="badge-cicle">Copy Writing</div>
          </div>
          <div className="back-arrow">
            <svg
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 10h16m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </div>
          <div className="sortby-action">
            <span>sort by</span>
            <div style={{ display: 'flex' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <span className="text">verified</span>
              <svg
                width={60}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x={0} fill="none" />
                <g>
                  <path d="M7 10l5 5 5-5" />
                </g>
              </svg>
            </div>
          </div>
        </div>

         <div className="mobile-nav">
          <div className="action-buttons">
            <div className="filter-action">
              <span>Filter</span>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 971.986 971.986"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3
  	c16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873
  	c-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"
                  />
                </g>
              </svg>
            </div>
            <div className="sortby-action">
              <span>sort by</span>
              <div style={{ display: 'flex' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>

                <span className="text">verified</span>
                <svg
                  width={60}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={0} fill="none" />
                  <g>
                    <path d="M7 10l5 5 5-5" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="foward-arrow">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 10H2m0 0l7-7m-7 7l7 7"
                />
              </svg>
            </div>
            <div className="back-arrow">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 10h16m0 0l-7-7m7 7l-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="badge-list">
            <div className="badge-cicle">3D</div>
            <div className="badge-cicle">Art</div>
            <div className="badge-cicle">Audio Editing</div>
            <div className="badge-cicle">Avatars</div>
            <div className="badge-cicle">Code Assistance</div>
            <div className="badge-cicle">Copy Writing</div>
          </div>
        </div> 
      </div>
    </>
  )
  
}

export default ActionBar
