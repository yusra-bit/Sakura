import Navbar from "../components/Navbar";
export default function AddPost() {
    return (
      
      <center>
        <Navbar />
          <div className="content">
        <h2>📝 Add Post 📝</h2>
        <br/>
       <input class="custom-file-input" type="file" />

<br/>
<br />
      <textarea name="postTxt" className="text" placeholder=" Write  the post here" height={30}></textarea>
      <button className="button-39" >Post</button>

      </div>
      </center>
      
  
      
    );
  }
  
  