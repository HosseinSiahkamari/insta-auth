'use client'


import { HeartIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import {
    addDoc,
    doc,
    collection,
    deleteDoc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc
} from "firebase/firestore";
import { db } from "./../../../firebase";
import { useEffect, useState } from "react";
// import Moment from "react-moment";
import { useSession } from "next-auth/react";
import { session } from "react"



const Post = ({ id, userImg, userName, img, caption }) => {

    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [comment, setComment] = useState("");
    const { data: session } = useSession();

    // const ans = comments[0].data()
    // console.log(ans);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db]
    );

    console.log(comments.length);

    useEffect(
        () =>
            onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
                setLikes(snapshot.docs)
            ),

        [db, id]
    );

    useEffect(
        () =>
            setHasLiked(
                likes.findIndex((like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );
    //   console.log(session.user.uid);
    const likedPost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.username
            });
        }
    };

    const sendCommentHandler = async (event) => {
        event.preventDefault();
        const commentToSend = comment;
        setComment("")
        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImg: session.user.image,
            timestamp: serverTimestamp()
        })
    }



    return (
        <div className="flex-col w-full h-auto  mx-auto ">
            <div className='flex-col p-4'>
                <div className='flex justify-between items-center max-w-[470px] px-5 mb-2 mx-auto h-8 bg-transparent'>
                    <div className='flex'>
                        <img className='w-8 h-8 rounded-full' src={userImg} alt="" />
                        <p className='mx-2'>{userName} </p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
                    </div>
                </div>
                <div className='max-w-[468px] mx-auto'>
                    <img src={img} className=' rounded-sm borde-[1px]' alt="picture" />
                </div>
                <div className='flex justify-between max-w-[468px] mx-auto h-10 items-center'>
                    <div className='flex'>
                        {hasLiked ? (
                            <div onClick={likedPost} >
                                <HeartIconFilled  className='px-2 cursor-pointer h-7 btn text-red-500' />
                            </div>
                        ) : (
                            <div onClick={likedPost}  className="">
                                <HeartIcon  className='px-2 cursor-pointer h-7 btn' />
                            </div>
                        )}
                        <svg className='px-2  h-6' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" /></svg>
                        <svg className='px-2  h-6' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg>
                    </div>
                    <div>
                        <svg className='px-2 h-6' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg>
                    </div>
                </div>
                <div className='flex max-w-[468px] mx-auto h-10 items-center px-2'>
                    <span className='font-semibold pr-2'>1,230</span>
                    <p>likes</p>
                </div>
                <div className='max-w-[468px] mx-auto flex items-start'>
                    <p className='font-semibold'>{userName} </p>
                    <p className='text-sm mt-[2px]'>{caption} </p>
                </div>
                <div className='max-w-[468px] mx-auto flex items-start  pt-2'>
                    <p className='text-xs font-bold'>See translation</p>
                </div>
                <div className='max-w-[468px] mt-1 mx-auto flex items-start '>
                    <p className='text-slate-500 text-sm'>View all comments</p>
                </div >
                {comments.length > 0 && <div className="max-w-[468px] mt-1 mx-auto flex-col justify-center items-center overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-600  h-20 ">
                    {comments.map((item) => (
                        <div key={item.id} className="flex items-center">
                            <img src={item.data().userImg} alt="" className="h-5 flex items-center justify-center rounded-full" />
                            <p className="h-7 ml-1 flex items-center justify-center text-sm font-bold">{item.data().username}</p>
                            <p className="h-7 ml-1 flex items-center justify-center text-sm">{item.data().comment}</p>
                        </div>
                    ))}
                </div>
                }
                <div className='max-w-[468px] mx-auto'>
                    {session && <form className="flex justify-center items-center text-sm border-b-2 pb-2 ">
                        <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" className='focus:outline-none h-8 w-full mt-1 text-sm place-content-center' placeholder="Add a comment..." />
                        {comment.length > 0 ? <button onClick={sendCommentHandler} type="submit" className="font-semibold  text-blue-500 mr-3"  >Post</button> : ''}
                        <FaceSmileIcon className="h-5 text-slate-500 cursor-pointer" />
                    </form>}
                    {/* <textarea className='h-8 w-full mt-1 text-sm place-content-center' name=" " id="" cols="30" rows="10" placeholder='Add a comment...'></textarea> */}
                </div>

            </div>
        </div>
    );
}

export default Post;