export const find = async () => {
    const data = await fetch(
        'https://turtleiatech.pythonanywhere.com/UserCheck'
    );
    return data.json();
};

export const create = async (userId, diet, garden, transport, notation) => {
    const data = await fetch(
        'https://turtleiatech.pythonanywhere.com/UserData',
        {
            method: 'POST',
            body: {
                user_id: userId,
                regime_alimentaire: diet,
                jardin: garden,
                transport,
                notation
            }
        }
    );
    return data.json();
};
