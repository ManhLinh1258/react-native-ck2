export const getImage = (imgUrl) => {
    return `https://tch-app.s3.ap-southeast-1.amazonaws.com/menufrontend/605da09f717e5d00114a3cda_oolong-nuong-new.jpg/${imgUrl.replace('uploads', '')}`
  }