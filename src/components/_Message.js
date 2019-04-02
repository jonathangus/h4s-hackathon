// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import get from 'lodash/get'
// const contentful = require('contentful')
// import { gutter } from '../vars'
// import { StaticQuery, graphql } from 'gatsby'
// import logo from '../../logo.png'
// import dayjs from 'dayjs'

// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: '25z746q9cwtc',
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken:
//     '32b139b4ab821fea8b94650f32aafebe9f88a815e9482c71bf5c0a8681e18ec3',
// })

// const Circle = styled.div`
//   width: 32px;
//   height: 32px;
//   border: 1px solid white;
//   border-radius: 50%;
//   overflow: hidden;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   img {
//     width: 80%;
//   }
// `

// const Box = styled.div`
//   display: flex;
//   -webkit-box-pack: end;
//   justify-content: flex-start;
//   cursor: auto;
//   pointer-events: none;
//   max-width: 250px;
//   outline: none;

// }`

// const Item = styled.div`
//   margin-bottom: ${gutter}px;
//   transform: translateY(18px);
//   &:last-child {
//     margin-bottom: 0;
//   }
// `

// const Inner = styled.div`
//   color: white;
//   display: inline-block;
//   position: relative;
//   word-break: break-word;
//   background: rgb(57, 135, 216);
//   font: 19px 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   border-radius: 1em;
//   padding: 0.5em 1em;
//   transition: transform 0.3s ease 0s, opacity 1.3s ease 0s;

//   &:after {
//     content: '';
//     display: block;
//     width: 1em;
//     height: 0.85em;
//     position: absolute;
//     left: -0.25em;
//     bottom: 0px;
//     border-bottom-right-radius: 100%;
//     z-index: -1;
//     border-right: 0.5em solid dodgerblue;
//   }
// `

// const Container = styled.div`
//   margin: ${gutter * 6}px auto;

//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   width: 300px;
// `
// const Items = styled.div`
//   flex: 1;
// `
// const Date = styled.div`
//   font-size: 13px;
// `

// const Message = props => {
//   const [data, setData] = useState(props.notices)

//   const fetchData = () => {
//     client
//       .getEntries({
//         content_type: 'notice',
//       })
//       .then(entry => {
//         const items = get(entry, 'items', []).map(n => ({
//           ...n.fields,
//           created: n.sys.createdAt,
//         }))
//         if (items) {
//           setData(items)
//         }
//         console.log({ items, entry })
//       })
//       .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     const id = setInterval(() => {
//       fetchData()
//     }, 30000)

//     return () => {
//       clearInterval(id)
//     }
//   }, [])

//   if (!data) {
//     return null
//   }

//   return (
//     <Container>
//       <Circle>
//         <img src={logo} />
//       </Circle>
//       <Items>
//         {data.map((d, k) => (
//           <Item key={k}>
//             <Box>
//               <Inner>{d.title}</Inner>
//             </Box>
//             <Date>{dayjs(d.created).format('HH:mm')}</Date>
//           </Item>
//         ))}
//       </Items>
//     </Container>
//   )
// }

// export default () => (
//   <StaticQuery
//     render={data => {
//       return (
//         <Message
//           notices={get(data, 'allContentfulNotice.edges', []).map(n => n.node)}
//         />
//       )
//     }}
//     query={graphql`
//       {
//         allContentfulNotice(filter: { node_locale: { eq: "en-US" } }) {
//           edges {
//             node {
//               id
//               title
//               text {
//                 id
//               }
//             }
//           }
//         }
//       }
//     `}
//   />
// )
