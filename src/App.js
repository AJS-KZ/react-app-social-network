import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://kbmis.com/wp-content/uploads/2018/10/autodesk-logo-png-autodesk-unveils-complete-manufacturing-software-portfolio-tct-magazine-2272.png" alt="logo" />
      </header>

      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>

      <div className="content">
        <div>
          <img src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" alt="content_pic" />
        </div>
        <div>
          ava + descriptions
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
            <div>
              Post 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
