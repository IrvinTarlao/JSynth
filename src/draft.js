const [pressedKeys, setPressedKeys] = useState([]);
const ALLOWED_KEYS = ['f', 'g', 'h', 'j', 'k', 'l', 'm', 't', 'y', 'u', 'o', 'p'];

useEffect(() => {
    const onKeyDown = ({ key }) => {
        if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
            setPressedKeys(previousPressedKeys => [...previousPressedKeys, key]);
        }
    }

    const onKeyUp = ({ key }) => {
        if (ALLOWED_KEYS.includes(key)) {
            setPressedKeys(previousPressedKeys => previousPressedKeys.filter(k => k !== key));
        }
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp)

    return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    }
});