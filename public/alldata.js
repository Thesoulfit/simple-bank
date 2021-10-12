function AllData(){
    const [data, setData] = React.useState(''); 
    const { user, updateUser } = React.useContext(UserContext);   

    React.useEffect(() => {        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}
        <h5>Current Context User:</h5>
        {JSON.stringify(user)}
    </>);
}
