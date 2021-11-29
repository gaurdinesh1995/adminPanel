import Cookies from "js-cookie";
export const canUseDOM = !! (
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

/**
 * Check if email is valid.
 *
 * @param {string} email email string.
 *
 * @return {boolean} is valid.
 */
export function isValidEmail( email ) {
    //eslint-disable-next-line
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test( email );
}


export const getAuthHeaders = () => {
 const authToken = Cookies.get("rui-auth-token");
 if (authToken) {
   const headers = {
     "Content-Type": "application/json",
     "Authorization": `Bearer ${authToken}`,
   };
   return headers;
 }
 return null;
};

/**
 * Get unique ID.
 *
 * @return {string} uid.
 */
export function getUID() {
    return (
        Number( String( Math.random() ).slice( 2 ) ) +
        Date.now() +
        Math.round( window.performance.now() )
    ).toString( 36 );
}

/**
 * Convert file size to human readable string.
 *
 * @param {number} size file size.
 *
 * @return {string} human readable size.
 */
export function fileSizeToHumanReadable( size ) {
    const i = Math.floor( Math.log( size ) / Math.log( 1024 ) );
    return ( ( size / Math.pow( 1024, i ) ).toFixed( 2 ) * 1 ) + ' ' + [ 'B', 'kB', 'MB', 'GB', 'TB' ][ i ];
}
