export const getPathText = (pathname: string): string => {
    switch (pathname) {
        case '/':
            return 'Home';
        case '/projects':
            return 'My Projects';
        case '/contact':
            return 'Contant Me';
    }
}