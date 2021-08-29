import React from "react";
import {PostCreate} from './Components/PostCreate'
import {PostList} from './Components/PostList'

export const App = () => {

    return <div className={'container'}>
        <h1>Post create</h1>
        <PostCreate/>
        <hr/>
        <PostList/>
    </div>
}