<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <NewsList></NewsList>
  </div>
</template>

<script type="text/javascript">
import Header from 'components/header/header';
import Navigation from 'components/navigation/navigation';
import NewsList from 'components/newslist/newslist';
export default {
  components: {
    Header,
    Navigation,
    NewsList
  }
};
</script> 