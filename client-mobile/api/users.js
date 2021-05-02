export const find = async () => {
    const url = 'https://turtleiatech.pythonanywhere.com/UserCheck';
    const data = await fetch(url);
    return data.json();
};

export const create = async (
    user_id,
    regime_alimentaire,
    jardin,
    transport,
    notation
) => {
    const url = new URL('https://turtleiatech.pythonanywhere.com/UserData');
    const params = { user_id, regime_alimentaire, jardin, transport, notation };
    url.search = new URLSearchParams(params).toString();

    await fetch(url, { method: 'POST' });
};
