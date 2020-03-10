"use strict";

import React from 'react';
import { Text, Button, View, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import Common from '../styles/Common';


const recipes = [
	{
		name: "chicken parm",
		image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg"
	},
	{
		name: "rotini",
		image: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
	},
	{
		name: "meatballs",
		image: "https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg"
	},
	{
		name: "salmon, broccoli, and rice",
		image: "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg"
	},
]

const margin = 5;

export default class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <>
                <Text style={Common.text}>
                    Recipes
                </Text>
				<FlatList
					style={Common.list}
					data={recipes}
					renderItem={({item}) => (
						<View style={{width: "100%"}}>
							<Image
								style={{width: "auto", height: 500, flex: 1}}
								source={{uri: item.image}}
							/>
							<View style={{
								position: "relative",
								top: `calc(-1em - ${margin}px)`,
								alignItems: "flex-end",
								marginRight: margin,
								height: 0,
							}}>
								<Text>{item.name}</Text>
							</View>
						</View>
					)}
				/>
            </>
        );
    }
}

/*
export default class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <>
                <Text style={Common.text}>
                    Recipes
                </Text>
				<FlatList
					style={Common.list}
					data={recipes}
					renderItem={({item}) => (
						<View>
							<Image
								style={{width: "auto", height: 500}}
								source={{uri: item.image}}
							/>
							<Text>{item.name}</Text>
						</View>
					)}
					ItemSeparatorComponent={() => (
						<View style={{
							width: "auto",
							height: 5,
							backgroundColor: "black",
							marginTop: 5,
							marginBottom: 5
						}}></View>
					)}
				/>
            </>
        );
    }
}*/