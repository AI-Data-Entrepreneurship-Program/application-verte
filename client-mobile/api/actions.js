export const find = async () => {
    const data = await fetch('https://turtleiatech.pythonanywhere.com/cartes');
    return data.json();
};

export const get = async id => {
    const url = `https://turtleiatech.pythonanywhere.com/carte/${id}`;
    const data = await fetch(url);
    return data.json();
};

export const like = async (user_id, action_id, likes) => {
    const url = new URL('https://turtleiatech.pythonanywhere.com/likes');
    const params = { user_id, action_id, likes };
    url.search = new URLSearchParams(params).toString();

    await fetch(url, { method: 'POST' });
};
