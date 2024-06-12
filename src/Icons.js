import {Image} from 'react-native';

function Logo() {
  return <Image source={require('./../assets/logo.png')} />;
}
function Home({size}) {
  return (<Image
  style={{width: size, height: size}}
  source={require('./../assets/home.png')} />
);
}
function HomeField({size}) {
  return (<Image
  style={{width: size, height: size}}
  source={require('./../assets/home-field.png')} />
);
}
function Search({size}) {
  return (<Image
  style={{width: size, height: size}}
  source={require('./../assets/search.png')} />
);
}
  function SearchField({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/search-field.png')} />
  );
  }
  function Reel({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/reel.png')} />
  );
  }
  function ReelField({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/reel-field.png')} />
  );
  }
  function Shop({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/shop.png')} />
  );
  }
  function ShopField({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/shop-field.png')} />
  );
  }
  function Plus({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/plus.png')} />
  );
  }
  function Heart({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/heart.png')} />
  );
  }
  function Messenger({size}) {
    return (<Image
    style={{width: size, height: size}}
    source={require('./../assets/messenger.png')} />
  );
  }
 function Dots() {
    return (<Image
    style={{width: 15, height: 3}}
    source={require('./../assets/more.png')} />
  );
}
 function Bookmark() {
    return (<Image
    style={{width: 24, height: 24}}
    source={require('./../assets/bookmark.png')} />
  );
  }
 function Comment() {
    return (<Image
    style={{width: 24, height: 24}}
    source={require('./../assets/comment.png')} />
  );
  }
 function Share() {
    return (<Image
    style={{width: 24, height: 24}}
    source={require('./../assets/share.png')} />
  );
  }
 
 function Dropdown() {
    return (<Image
    style={{width: 24, height: 24}}
    source={require('./../assets/dropdown.png')} />
  );
  }
 function BurgerMenu() {
    return (<Image
    style={{width: 20, height: 20}}
    source={require('./../assets/burger.png')} />
  );
  }
 
export {BurgerMenu, Dropdown, Share, Comment, Bookmark, Dots, Plus, Heart, Messenger, Logo, Home, HomeField, Search, SearchField, Reel, ReelField, Shop, ShopField};
