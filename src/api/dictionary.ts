/**
 * @author Markitanov Vadim
 * @since 25.03.2023
 */
export const getDictionary = () => {
  fetch('http://localhost:9000/users')
    .then(res => {
      console.log('RES', res)
    })
    .catch(err => {
      console.log('err:', err)
    })
}
