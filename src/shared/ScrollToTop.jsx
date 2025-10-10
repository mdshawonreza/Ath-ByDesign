// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // optional
//     });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, state } = useLocation();

    useEffect(() => {
        if (state?.scrollTo) {
            const section = document.querySelector(state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, state]);

    return null;
};

export default ScrollToTop;
