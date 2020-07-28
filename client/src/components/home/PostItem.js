import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../img/avatar.png"
import "./home.css"; 
import { connect } from "react-redux";
import SuggestionLists from "./SuggestionLists";
import { getSuggestionList } from "../../actions/profileActions";
import Comments from "../displayPost/Comments";
import AddComment from "../displayPost/AddComment";
import Moment from "react-moment"; 
import { addLike } from "../../actions/postActions";
import { savePost } from "../../actions/postActions";
import PropTypes from 'prop-types';

class PostItem extends Component {
  
         constructor() {
           super();
           this.state = {
             follow: false,
             isClicked: false,
           };
          
         }
         componentDidMount() {
           this.props.getSuggestionList();
         }
       onLikeClick(id) {
          this.props.addLike(id);
         }
       onSaveClick(id) {
            this.props.savePost(id);
          }

         render() {
           const {post,postId,auth, profile} = this.props;      
           
           let suggestionList;
           if (profile.profiles && profile.profiles.length > 0) {
            suggestionList = <SuggestionLists profiles={profile.profiles}/>
           } 

           return (
             <div className='container'>
               <div className='row'>
                 <div className='col-sm-6'>
                   <div className='card-home'>
                     <div className='card-header'>
                       <Link to='/current-profile'>
                         <img
                           className='avatar-icon'
                           src={post.avatar}
                           alt='Avatar'
                           style={{ marginLeft: ".5px" }}
                         />
                       </Link>
                       <Link to='/current-profile' className='name-of-account'>
                         {post.name}
                       </Link>
                     </div>
                     <img
                       className='card-img-top'
                       src={post.image}
                     />
                     <div classname='card-body'>
                       <section id='icons'>
                         <Link
                           onClick={this.onLikeClick.bind(this, post._id)}                          
                         >
                           <i
                             className='fa fa-heart-o fa-2x'
                             style={{
                               color: "black",
                               marginRight: "20px",
                               fontSize: "1.4em",
                               
                             }}
                           /></Link>      
                         
                         
                         <Link to=''>
                           <i
                             className='fa fa-comment-o '
                             style={{
                               color: "black",
                               marginRight: "20px",
                               fontSize: "1.4em",
                             }}
                           ></i>
                         </Link>
                         <Link to=''>
                           <i
                             className='fa fa-paper-plane-o'
                             style={{
                               color: "black",
                               marginRight:"20px",
                               fontSize: "1.4em",
                             }}
                           ></i>
                         </Link>
                         <Link
                           onClick={this.onSaveClick.bind(this, post._id)}
                         >
                           <i
                             className='fa fa-bookmark-o'
                             style={{ color: "black", fontSize: "1.4em" }}
                           />
                         </Link>
                         <div className='textStyle-date'>
                           <div
                             style={{
                               fontWeight: "600",
                               fontSize: "1.4em",
                               color: "black",
                             }}
                           >
                             {post.likes && post.likes.length} Likes
                           </div>
                         </div>
                         <div>
                           <Link className='handlename-post' to=''>
                             {post.name}
                           </Link>
                           <span className='textStyle-comment'>
                             &nbsp;{post.text}
                           </span>              
                           {/* comments on post */}
                           <Comments showAvatar={false} comments={post.comments} postId={postId} />
                         </div>
                         <div>
                           <div
                             style={{
                               fontSize: ".7em",
                               color: "grey",
                               marginTop: "20px",
                             }}
                           >
                             <Moment format="hh">{post.time} 
                              </Moment> Hours Ago
                           </div>
                         </div>
                       </section>
                     </div>
                     <br />
                     <div class='card-footer'>
                       <div
                         style={{
                           fontSize: "1em",
                           color: "grey",
                           marginTop: "10px",
                         }}
                       >
                         <AddComment postId={postId} />
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className='col-sm-6'>
                   <div
                     className='card-home d-none d-xl-block'
                     style={{
                       marginTop: "20px",
                       backgroundColor: "#fafafa",
                       width: "300px",
                       height: "400px",
                       border: "none",
                     }}
                   >
                     {/* Avatar of current user */}
                     <div
                       className='card-header'
                       style={{
                         backgroundColor: "#fafafa",
                         border: "none",
                       }}
                     >
                       <Link to='/current-profile'>
                         <img
                           className='avatar-icon'
                           src={auth.user.avatar}
                           alt='Avatar'
                           style={{
                             marginLeft: ".5px",
                             width: "60px",
                           }}
                         />
                       </Link>
                       <Link to='/current-profile' className='name-of-account'>
                          {auth.user.name}
                       </Link>
                     </div>
                    
                     {/* Suggestions lists */}
                     <div
                       style={{
                         marginLeft: "10px",
                         color: "gray",
                         fontWeight: "600",
                       }}
                     >
                       Suggestions For You
                       <Link to="/explore" style={{ float: "right", color: "black" }}>
                         See All
                       </Link>
                     </div>

                     {/* <SuggestionLists profiles={profile.profiles}/> */}
                     {suggestionList}
                   </div>
                 </div>
               </div>
             </div>
           );
         }
       }
PostItem.propTypes = {
  
  addLike: PropTypes.func.isRequired, 
  savePost: PropTypes.func.isRequired, 
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getSuggestionList,addLike,savePost})(PostItem);
