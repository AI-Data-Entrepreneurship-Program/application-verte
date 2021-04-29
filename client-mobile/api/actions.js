export const find = async () => {
    const data = await fetch('https://turtleiatech.pythonanywhere.com/cartes');
    return data.json();
};

export const get = async id => {
    const data = await fetch(
        `https://turtleiatech.pythonanywhere.com/carte/${id}`
    );
    return data.json();
};

export const like = async (userId, id) => {
    const data = await fetch('https://turtleiatech.pythonanywhere.com/likes', {
        method: 'POST',
        body: { user_id: userId, action_id, id }
    });
    return data.json();
};
