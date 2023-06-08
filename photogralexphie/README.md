Alternative caroussel :

const handleRect = useCallback((node) => {
setWidth1(node.scrollWidth - node.offsetWidth);
setWidth2(node.scrollWidth - node.offsetWidth);
setWidth3(node.scrollWidth - node.offsetWidth);
setWidth4(node.scrollWidth - node.offsetWidth);
console.log(node.scrollWidth);
}, []);
