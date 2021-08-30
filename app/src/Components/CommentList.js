import React, {useEffect, useState} from "react";
import axios from "axios";

export const CommentList = ({comments}) => {
    const renderComments =  comments.map(comment => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })
    return <div>
        {renderComments}
    </div>
}