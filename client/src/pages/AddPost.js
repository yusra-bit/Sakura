import Navbar from "../components/Navbar";
export default function AddPost() {
    return (
      
      <center>
        <Navbar />
          <div className="content">
        <h2>📝 Add Post 📝</h2>
      <input type="file" className="imgFile" name="article_cover" />
      <textarea name="postTxt"></textarea>
      </div>
      </center>
      
  
      
    );
  }
  
  