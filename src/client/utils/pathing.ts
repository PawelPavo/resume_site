export const getPathText = (pathname: string): string => {
    switch (pathname) {
        case '/':
            return 'Welcome';
        case '/projects':
            return 'My Projects';
        case '/contact':
            return 'Contact Me';
        case '/about':
            return 'About Me';
    }
}