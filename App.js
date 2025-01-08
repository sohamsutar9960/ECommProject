// import React, {useEffect, useState, useCallback, useMemo} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   TextInput,
// } from 'react-native';
// import axios from 'axios';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('https://fakestoreapi.com/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase()),
//     );
//   }, [products, searchQuery]);

//   const renderProduct = useCallback(({item}) => {
//     return (
//       <TouchableOpacity style={styles.productCard}>
//         <Image
//           source={{uri: item.image}}
//           style={styles.productImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.productTitle} numberOfLines={2}>
//           {item.title}
//         </Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//       </TouchableOpacity>
//     );
//   }, []);

//   const renderSkeleton = () => {
//     return (
//       <SkeletonPlaceholder>
//         <View style={styles.productCard}>
//           <View style={styles.skeletonImage} />
//           <View style={styles.skeletonText} />
//           <View style={styles.skeletonTextSmall} />
//         </View>
//       </SkeletonPlaceholder>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>E-Commerce</Text>
//         <Icon name="shopping-cart" size={28} color="#000" />
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchBar}>
//         <Icon name="search" size={20} color="#999" />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       </View>

//       {/* Product List */}
//       {loading ? (
//         <FlatList
//           data={[1, 2, 3, 4, 5, 6]}
//           keyExtractor={item => item.toString()}
//           renderItem={renderSkeleton}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//         />
//       ) : (
//         <FlatList
//           data={filteredProducts}
//           keyExtractor={item => item.id.toString()}
//           renderItem={renderProduct}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.productList}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#000',
//   },
//   productList: {
//     paddingBottom: 20,
//   },
//   productCard: {
//     flex: 1,
//     backgroundColor: '#fff',
//     margin: 5,
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   productTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#00c853',
//   },
//   skeletonImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//   },
//   skeletonText: {
//     width: '60%',
//     height: 10,
//     borderRadius: 4,
//     marginTop: 10,
//   },
//   skeletonTextSmall: {
//     width: '40%',
//     height: 10,
//     borderRadius: 4,
//     marginTop: 5,
//   },
// });

// export default App;

import React, {useContext} from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './src/context/AuthContext';
import RootNavigation from './src/stack/RootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Toast />
        <RootNavigation />
      </AuthProvider>
    </Provider>
  );
}
