import { useEffect, useState } from 'react';

export default function useComments(action) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (action?.comments)
            setComments(
                action.comments.sort((a, b) => b.likes_count - a.likes_count)
            );
    }, []);

    useEffect(() => {
        action.comments = comments;
    }, [comments]);

    return [comments, setComments];
}
