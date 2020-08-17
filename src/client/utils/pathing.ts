export const getPathText = (pathname: string): string => {

    if (pathname.includes('/tag')) {
        pathname = '/tag';
    }

    switch (pathname) {
        case '/':
            return 'Welcome';
        case '/projects':
            return 'My Current Work';
        case '/contact':
            return 'Contact';
        case '/about':
            return 'Bio';
        case '/tag':
            return 'Results By Tag';
    }
}