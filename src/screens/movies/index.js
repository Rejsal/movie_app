import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {images} from '../../assets/images';
import MovieCard from '../../components/MovieCard';
import {colors} from '../../theme/color';
import {fonts} from '../../theme/font';
import {size} from '../../theme/size';

function MoviesList() {
  const {movie: movieModel} = useSelector(({movie}) => {
    return {
      movie,
    };
  });
  const {movie: movieDispatch} = useDispatch(({movie}) => {
    return {
      movie,
    };
  });

  const {getMovies} = movieDispatch;

  useEffect(() => {
    getMovies(1);
  }, [getMovies]);

  const _renderHeader = () => {
    return <View style={styles.listHeader} />;
  };

  const _renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const {
    loading = false,
    movies = [],
    movieTitle,
    totalPage,
    currentPage,
  } = movieModel;

  const _renderFooter = () => {
    if (loading)
      return (
        <ActivityIndicator
          size={'small'}
          style={{alignSelf: 'center', marginVertical: size.s24}}
        />
      );
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Image style={styles.header} source={images.nav_bar} />
          <View style={styles.headerView}>
            <Text style={styles.heading}>{movieTitle}</Text>
          </View>
        </View>
        {loading && movies.length === 0 ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : movies.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listStyle}
            data={movies}
            numColumns={3}
            removeClippedSubviews
            maxToRenderPerBatch={10}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={_renderSeparator}
            ListHeaderComponent={_renderHeader}
            ListFooterComponent={_renderFooter}
            renderItem={({item}) => (
              <MovieCard title={item.name} image={item['poster-image']} />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              if (currentPage < totalPage && !loading) {
                getMovies(currentPage + 1);
              }
            }}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <Text>No data to display</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerView: {position: 'absolute', padding: size.s16},
  subContainer: {
    flex: 1,
    backgroundColor: colors.lightBlack,
  },
  header: {width: '100%', height: 90},
  listHeader: {
    height: size.s18,
  },
  listStyle: {paddingHorizontal: size.s8},
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: colors.white,
    fontSize: size.s20,
    fontFamily: fonts.FNormal,
    marginBottom: 10,
  },
  separator: {
    height: size.s45,
  },
});

export default MoviesList;
