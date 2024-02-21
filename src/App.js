import logo from'./logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Slide from './component/Slide'; 
import Mycart1 from './component/Mycart1'

function App() {
  const[products,setProducts]=useState([
  {
    
        "Id": "1",
        "Title": "Banana",
        "Category": "Fruit",
        "SubCategory": "Musaceae",
        "Manufacturer": "The banana company",
        "Contents": "Banana",
        "Description": "The banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species - Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa x paradisiaca for the hybrid Musa acuminata x M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used. It is also yellow.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/banana.jpg",
        "OrgPrice": 7,
        "Price": 7
      }, {
        "Id": "2",
        "Title": "Cinnamon roll",
        "Category": "Bakery",
        "SubCategory": "Cookies and sweets",
        "Manufacturer": "Awesome bakery",
        "Contents": "Wheat flour,Cinnamon,Bunnies",
        "Description": "A cinnamon roll (also cinnamon bun, cinnamon swirl, cinnamon Danish and cinnamon snail) is a sweet roll served commonly in Northern Europe and North America. In North America its common use is for breakfast. Its main ingredients are flour, cinnamon, sugar, and butter, which provide a robust and sweet flavor. In some places it is eaten as a breakfast food and is often served with cream cheese or icing.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/cinnamonroll.jpg",
        "OrgPrice": 5,
        "Price": 5
      }, {
        "Id": "3",
        "Title": "Apple",
        "Category": "Fruit",
        "SubCategory": "Rosaceae",
        "Manufacturer": "Fruits n Veggies",
        "Contents": "Apple",
        "Description": "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/apple.jpg",
        "OrgPrice": 6,
        "Price": 6
      }, {
        "Id": "4",
        "Title": "Minced meat",
        "Category": "Meat",
        "SubCategory": "Beef",
        "Manufacturer": "UltraBovine",
        "Contents": "Ground beef",
        "Description": "Ground beef, beef mince, minced meat, hamburger (in the United States) is a ground meat made of beef, finely chopped by a meat grinder. It is used in many recipes including hamburgers and cottage pie. In some parts of the world, a meat grinder is called a mincer.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/mincedmeat.jpg",
        "OrgPrice": 60,
        "Price": 60
      }, {
        "Id": "5",
        "Title": "Milk",
        "Category": "Dairy",
        "SubCategory": "Milk",
        "Manufacturer": "Early",
        "Contents": "Milk from cow",
        "Description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. Milk contains many other nutrients and the carbohydrate lactose.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/milk.jpg",
        "OrgPrice": 10,
        "Price": 10
      }, {
        "Id": "6",
        "Title": "Organic Milk",
        "Category": "Dairy",
        "SubCategory": "Milk",
        "Manufacturer": "Early",
        "Contents": "Milk from cow",
        "Description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. Milk contains many other nutrients and the carbohydrate lactose.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/organicmilk.jpg",
        "OrgPrice": 12,
        "Price": 12
      }, {
        "Id": "7",
        "Title": "Organic Apple",
        "Category": "Fruit",
        "SubCategory": "Rosaceae",
        "Manufacturer": "The banana company",
        "Contents": "Apple",
        "Description": "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/greenapple.jpg",
        "OrgPrice": 7,
        "Price": 7
      }, {
        "Id": "8",
        "Title": "Ground beef",
        "Category": "Meat",
        "SubCategory": "Beef",
        "Manufacturer": "MeatNStuff",
        "Contents": "Ground beef",
        "Description": "Ground beef, beef mince, minced meat, hamburger (in the United States) is a ground meat made of beef, finely chopped by a meat grinder. It is used in many recipes including hamburgers and cottage pie. In some parts of the world, a meat grinder is called a mincer.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/groundbeef.jpg",
        "OrgPrice": 65,
        "Price": 65
      }, {
        "Id": "9",
        "Title": "Steak",
        "Category": "Meat",
        "SubCategory": "Beef",
        "Manufacturer": "UltraBovine",
        "Contents": "Beef",
        "Description": "A steak is a meat generally sliced perpendicular to the muscle fibers, potentially including a bone. Exceptions, in which the meat is sliced parallel to the fibers, include the skirt steak that is cut from the plate, the flank steak that is cut from the abdominal muscles, and the Silverfinger steak that is cut from the loin and includes three rib bones. When the word \"steak\" is used without qualification, it generally refers to a beef steak. In a larger sense, there are also fish steaks, ground meat steaks, pork steak and many more varieties.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/steak.jpg",
        "OrgPrice": 100,
        "Price": 100
      }, {
        "Id": "10",
        "Title": "Chicken breast",
        "Category": "Meat",
        "SubCategory": "Bird",
        "Manufacturer": "MeatNStuff",
        "Contents": "Meat from chicken",
        "Description": "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/chickenbreast.jpg",
        "OrgPrice": 55,
        "Price": 55
      }, {
        "Id": "11",
        "Title": "Organic Chicken breast",
        "Category": "Meat",
        "SubCategory": "Bird",
        "Manufacturer": "Happy birds",
        "Contents": "Meat from chicken",
        "Description": "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/organicchickenbreast.jpg",
        "OrgPrice": 65,
        "Price": 55,
        "Campaigns":["Sale", "Organic sale"]
      }, {
        "Id": "12",
        "Title": "Whole chicken",
        "Category": "Meat",
        "SubCategory": "Bird",
        "Manufacturer": "MeatNStuff",
        "Contents": "Meat from chicken",
        "Description": "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/wholechicken.jpg",
        "OrgPrice": 40,
        "Price": 40
      }, {
        "Id": "13",
        "Title": "Wheat flour",
        "Category": "Pantry",
        "SubCategory": "Flours",
        "Manufacturer": "Grinders inc",
        "Contents": "Ground wheat",
        "Description": "Wheat flour is a powder made from the grinding of wheat used for human consumption. More wheat flour is produced than any other flour. Wheat varieties are called \"soft\" or \"weak\" if gluten content is low, and are called \"hard\" or \"strong\" if they have high gluten content. Hard flour, or bread flour, is high in gluten, with 12% to 14% gluten content, its dough has elastic toughness that holds its shape well once baked. Soft flour is comparatively low in gluten and thus results in a loaf with a finer, crumbly texture. Soft flour is usually divided into cake flour, which is the lowest in gluten, and pastry flour, which has slightly more gluten than cake flour.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/flour.jpg",
        "OrgPrice": 12,
        "Price": 12
      }, {
        "Id": "14",
        "Title": "Powdered sugar",
        "Category": "Pantry",
        "SubCategory": "Sugar",
        "Manufacturer": "Sweet Home Alabama",
        "Contents": "Ground sugar from sugar cane",
        "Description": "Sugar is the generalized name for sweet, short-chain, soluble carbohydrates, many of which are used in food. They are carbohydrates, composed of carbon, hydrogen, and oxygen. There are various types of sugar derived from different sources. Simple sugars are called monosaccharides and include glucose (also known as dextrose), fructose and galactose. The table or granulated sugar most customarily used as food is sucrose, a disaccharide. (In the body, sucrose hydrolyses into fructose and glucose.) Other disaccharides include maltose and lactose. Longer chains of sugars are called oligosaccharides. Chemically-different substances may also have a sweet taste, but are not classified as sugars. Some are used as lower-calorie food substitutes for sugar described as artificial sweeteners.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/powderedsugar.jpg",
        "OrgPrice": 11,
        "Price": 11,
        "IsNew": "true"
      }, {
        "Id": "15",
        "Title": "Organic Sugar",
        "Category": "Pantry",
        "SubCategory": "Sugar",
        "Manufacturer": "Sweet Home Alabama",
        "Contents": "Sugar from sugar cane",
        "Description": "Sugar is the generalized name for sweet, short-chain, soluble carbohydrates, many of which are used in food. They are carbohydrates, composed of carbon, hydrogen, and oxygen. There are various types of sugar derived from different sources. Simple sugars are called monosaccharides and include glucose (also known as dextrose), fructose and galactose. The table or granulated sugar most customarily used as food is sucrose, a disaccharide. (In the body, sucrose hydrolyses into fructose and glucose.) Other disaccharides include maltose and lactose. Longer chains of sugars are called oligosaccharides. Chemically-different substances may also have a sweet taste, but are not classified as sugars. Some are used as lower-calorie food substitutes for sugar described as artificial sweeteners.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/sugar.jpg",
        "OrgPrice": 14,
        "Price": 14
      }, {
        "Id": "16",
        "Title": "Oatmeal",
        "Category": "Pantry",
        "SubCategory": "Grains",
        "Manufacturer": "Grinders inc",
        "Contents": "Ground oats",
        "Description": "Oatmeal is oat groats (i.e. grains) that have been ground, steel-cut, crushed, or rolled. Ground oats are also called 'white oats'. The term 'oatmeal' is also used in the U.S. and parts of Canada to mean oat porridge.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/oatmeal.jpg",
        "OrgPrice": 12,
        "Price": 12
      }, {
        "Id": "17",
        "Title": "Orange",
        "Category": "Fruit",
        "SubCategory": "Citrus",
        "Manufacturer": "Fruits n Veggies",
        "Contents": "Orange",
        "Description": "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus x sinensis in the family Rutaceae.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/orange.jpg",
        "OrgPrice": 5,
        "Price": 5
      }, {
        "Id": "18",
        "Title": "Yoghurt",
        "Category": "Dairy",
        "SubCategory": "Yoghurt",
        "Manufacturer": "Early",
        "Contents": "Sour milk with bacteria",
        "Description": "Yogurt, yoghurt, or yoghourt (from Turkish: yogurt; other spellings listed below) is a food produced by bacterial fermentation of milk. The bacteria used to make yogurt are known as \"yogurt cultures\". Fermentation of lactose by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tang. Worldwide, cow's milk, the protein of which is mainly casein, is most commonly used to make yogurt. Milk from water buffalo, goats, ewes, mares, camels, and yaks, however, is also used to produce yogurt in various parts of the world.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/yoghurt.jpg",
        "OrgPrice": 14,
        "Price": 14
      }, {
        "Id": "19",
        "Title": "Syrup",
        "Category": "Pantry",
        "SubCategory": "Sugar",
        "Manufacturer": "Sweet Home Alabama",
        "Contents": "Syrup",
        "Description": "In cooking, a syrup or sirup is a condiment that is a thick, viscous liquid consisting primarily of a solution of sugar in water, containing a large amount of dissolved sugars but showing little tendency to deposit crystals. Its consistency is similar to that of molasses. The viscosity arises from the multiple hydrogen bonds between the dissolved sugar, which has many hydroxyl (OH) groups, and the water. The most popular brand of syrup in the United States, Aunt Jemima, has been prominent in pop culture, with one episode of the tv show South Park giving it a key role.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/syrup.jpg",
        "OrgPrice": 24,
        "Price": 24
      }, {
        "Id": "20",
        "Title": "Maple Syrup",
        "Category": "Pantry",
        "SubCategory": "Sugar",
        "Manufacturer": "Ootstanding, Ey?",
        "Contents": "Syrup",
        "Description": "Maple syrup is a syrup usually made from the xylem sap of sugar maple, red maple, or black maple trees, although it can also be made from other maple species. In cold climates, these trees store starch in their trunks and roots before the winter; the starch is then converted to sugar that rises in the sap in the spring. Maple trees can be tapped by boring holes into their trunks and collecting the exuded sap. The sap is processed by heating to evaporate much of the water, leaving the concentrated syrup.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/maplesyrup.jpg",
        "OrgPrice": 34,
        "Price": 34
      }, {
        "Id": "21",
        "Title": "Coffee",
        "Category": "Pantry",
        "SubCategory": "Coffe and Tea",
        "Manufacturer": "Dipton",
        "Contents": "Ground coffee",
        "Description": "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India and Africa. The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. The latter is resistant to the coffee leaf rust, Hemileia vastatrix, but has a more bitter taste. Once ripe, coffee beans are picked, processed, and dried. Green (unroasted) coffee beans are one of the most traded agricultural commodities in the world. Once traded, the beans are roasted to varying degrees, depending on the desired flavor, before being ground and brewed to create coffee.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/coffee.jpg",
        "Campaigns":["Sale"],
        "OrgPrice": 46,
        "Price": 36
      }, {
        "Id": "22",
        "Title": "Mutton steak",
        "Category": "Meat",
        "SubCategory": "Mutton",
        "Manufacturer": "MeatNStuff",
        "Contents": "Meat from lamb",
        "Description": "Lamb, hogget, and mutton (UK, India, South Africa, Canada, New Zealand and Australia) are terms for the meat of domestic sheep (species Ovis aries) at different ages.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/mutton.jpg",
        "OrgPrice": 76,
        "Price": 76
      }, {
        "Id": "23",
        "Title": "Beer",
        "Category": "Refreshments",
        "SubCategory": "Drinks",
        "Manufacturer": "Charles Mountain",
        "Contents": "Malt, hops, yeast and water",
        "Description": "Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grains, most commonly malted barley and malted wheat. Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The brewing process causes a natural carbonation effect, although forced carbonation is also used. The preparation of beer is called brewing.",
        "Organic": "false",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/beer.jpg",
        "OrgPrice": 16,
        "Price": 16
      }, {
        "Id": "24",
        "Title": "Organic Beer",
        "Category": "Refreshments",
        "SubCategory": "Drinks",
        "Manufacturer": "Charles Mountain",
        "Contents": "Malt, hops, yeast and water",
        "Description": "Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grains, most commonly malted barley and malted wheat. Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The brewing process causes a natural carbonation effect, although forced carbonation is also used. The preparation of beer is called brewing.",
        "Organic": "true",
        "ImageUrl": "http://www.loop54.com/hubfs/demo_images/organicbeer.jpg",
        "OrgPrice": 19,
        "Price": 19,
        "IsNew": "true"
      },
     ] )
   const[val,setVal]=useState([])
   const[home,setHome]=useState(false)
   
   const myCart=(data)=>
   {
   setVal([...val,data])
   }   
   

  return (
    <>
    
    <Header val={val.length}frame={logo} setHome={(value)=>setHome(value)}></Header>
    {
    home ?
    <Mycart1 val1={val.length} val={val}></Mycart1>:
    <Slide myCart={myCart} products={products}/>
    }
    </>
    
  );
}

export default App;
