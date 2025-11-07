export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
}

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Margherita Pizza',
    description: 'A traditional Italian pizza with fresh mozzarella, tomatoes, and basil',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    category: 'Italian',
    calories: 280,
    ingredients: [
      '2 cups all-purpose flour',
      '1 tsp active dry yeast',
      '1 tsp salt',
      '3/4 cup warm water',
      '2 tbsp olive oil',
      '1 cup tomato sauce',
      '8 oz fresh mozzarella',
      'Fresh basil leaves',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Mix flour, yeast, and salt in a large bowl',
      'Add warm water and olive oil, knead until smooth',
      'Let dough rise for 1 hour',
      'Roll out dough and spread tomato sauce',
      'Add mozzarella and bake at 475°F for 12-15 minutes',
      'Garnish with fresh basil and serve hot'
    ]
  },
  {
    id: '2',
    title: 'Creamy Chicken Alfredo',
    description: 'Rich and creamy pasta with tender chicken in a garlic parmesan sauce',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&q=80',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    category: 'Italian',
    calories: 520,
    ingredients: [
      '1 lb fettuccine pasta',
      '2 chicken breasts',
      '2 cups heavy cream',
      '1 cup grated parmesan',
      '4 cloves garlic, minced',
      '4 tbsp butter',
      'Salt and pepper',
      'Fresh parsley'
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Season and cook chicken, then slice',
      'Melt butter and sauté garlic',
      'Add cream and simmer for 5 minutes',
      'Stir in parmesan until melted',
      'Toss pasta and chicken with sauce',
      'Garnish with parsley and serve'
    ]
  },
  {
    id: '3',
    title: 'Spicy Thai Basil Chicken',
    description: 'A quick and flavorful stir-fry with Thai basil and chilies',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    cookTime: 20,
    servings: 3,
    difficulty: 'Easy',
    category: 'Thai',
    calories: 340,
    ingredients: [
      '1 lb ground chicken',
      '3 Thai chilies, sliced',
      '4 cloves garlic, minced',
      '1 cup Thai basil leaves',
      '2 tbsp oyster sauce',
      '1 tbsp soy sauce',
      '1 tbsp fish sauce',
      '1 tsp sugar',
      '2 tbsp vegetable oil'
    ],
    instructions: [
      'Heat oil in a wok over high heat',
      'Add garlic and chilies, stir-fry for 30 seconds',
      'Add ground chicken and break apart',
      'Cook until chicken is no longer pink',
      'Add oyster sauce, soy sauce, fish sauce, and sugar',
      'Stir in Thai basil and cook until wilted',
      'Serve over steamed rice'
    ]
  },
  {
    id: '4',
    title: 'Classic Beef Burger',
    description: 'Juicy homemade burger with all the fixings',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'American',
    calories: 680,
    ingredients: [
      '1.5 lbs ground beef (80/20)',
      '4 burger buns',
      '4 slices cheddar cheese',
      'Lettuce leaves',
      'Tomato slices',
      'Red onion slices',
      'Pickles',
      'Ketchup and mustard',
      'Salt and pepper'
    ],
    instructions: [
      'Form beef into 4 patties, season with salt and pepper',
      'Heat grill or skillet over high heat',
      'Cook patties 4-5 minutes per side',
      'Add cheese in last minute of cooking',
      'Toast buns on the grill',
      'Assemble burgers with toppings',
      'Serve immediately'
    ]
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Bowl',
    description: 'Healthy and colorful bowl with quinoa, vegetables, and feta',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    cookTime: 30,
    servings: 2,
    difficulty: 'Easy',
    category: 'Mediterranean',
    calories: 420,
    ingredients: [
      '1 cup quinoa',
      '2 cups water',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, sliced',
      '1/2 cup feta cheese',
      '1/4 cup kalamata olives',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      'Fresh herbs'
    ],
    instructions: [
      'Rinse quinoa and cook in water until fluffy',
      'Let quinoa cool slightly',
      'Dice cucumber, halve tomatoes, slice onion',
      'Mix olive oil and lemon juice for dressing',
      'Combine quinoa with vegetables',
      'Add feta, olives, and herbs',
      'Drizzle with dressing and serve'
    ]
  },
  {
    id: '6',
    title: 'Chocolate Lava Cake',
    description: 'Decadent molten chocolate cake with a gooey center',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    category: 'Dessert',
    calories: 440,
    ingredients: [
      '4 oz dark chocolate',
      '1/2 cup butter',
      '1 cup powdered sugar',
      '2 whole eggs',
      '2 egg yolks',
      '6 tbsp flour',
      'Butter and cocoa for ramekins',
      'Vanilla ice cream for serving'
    ],
    instructions: [
      'Butter and dust 4 ramekins with cocoa powder',
      'Melt chocolate and butter together',
      'Whisk in powdered sugar',
      'Add eggs and egg yolks, mix well',
      'Fold in flour gently',
      'Divide batter among ramekins',
      'Bake at 425°F for 12-14 minutes',
      'Invert onto plates and serve with ice cream'
    ]
  },
  {
    id: '7',
    title: 'Shrimp Tacos',
    description: 'Light and fresh tacos with seasoned shrimp and tangy slaw',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    cookTime: 25,
    servings: 4,
    difficulty: 'Easy',
    category: 'Mexican',
    calories: 380,
    ingredients: [
      '1 lb shrimp, peeled',
      '8 small tortillas',
      '2 cups shredded cabbage',
      '1/2 cup mayo',
      '2 tbsp lime juice',
      '1 tsp chili powder',
      '1/2 tsp cumin',
      '1/2 tsp paprika',
      'Cilantro and lime wedges'
    ],
    instructions: [
      'Mix mayo and lime juice for slaw dressing',
      'Toss cabbage with dressing',
      'Season shrimp with chili powder, cumin, paprika',
      'Cook shrimp in skillet for 2-3 minutes per side',
      'Warm tortillas',
      'Assemble tacos with shrimp and slaw',
      'Garnish with cilantro and lime'
    ]
  },
  {
    id: '8',
    title: 'Vegetable Stir-Fry',
    description: 'Colorful mix of fresh vegetables in a savory sauce',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    cookTime: 15,
    servings: 3,
    difficulty: 'Easy',
    category: 'Asian',
    calories: 220,
    ingredients: [
      '2 cups broccoli florets',
      '1 bell pepper, sliced',
      '1 cup snap peas',
      '1 carrot, julienned',
      '3 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp ginger, grated',
      'Sesame seeds'
    ],
    instructions: [
      'Heat sesame oil in wok over high heat',
      'Add garlic and ginger, stir-fry briefly',
      'Add harder vegetables first (broccoli, carrots)',
      'After 3 minutes, add peppers and snap peas',
      'Stir-fry for 2-3 more minutes',
      'Add soy sauce and toss',
      'Garnish with sesame seeds and serve'
    ]
  }
];

export const categories = ['All', 'Italian', 'Thai', 'American', 'Mediterranean', 'Mexican', 'Asian', 'Dessert'];
