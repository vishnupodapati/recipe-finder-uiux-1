'use client';

import { use } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, Flame, ChefHat, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { mockRecipes } from '@/lib/recipes';
import Link from 'next/link';
import { useState } from 'react';

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const recipe = mockRecipes.find((r) => r.id === id);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <Link href="/recipes">
            <Button>Back to Recipes</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Back Button */}
        <Link href="/recipes">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recipes
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[400px] object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm">
                {recipe.category}
              </Badge>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant={isFavorite ? "default" : "outline"}
                className="flex-1"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`mr-2 h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Saved' : 'Save Recipe'}
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-4xl font-bold mb-3">{recipe.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{recipe.description}</p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Clock className="h-5 w-5 mb-2 text-primary" />
                  <p className="text-sm font-medium">{recipe.cookTime} min</p>
                  <p className="text-xs text-muted-foreground">Cook Time</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Users className="h-5 w-5 mb-2 text-primary" />
                  <p className="text-sm font-medium">{recipe.servings}</p>
                  <p className="text-xs text-muted-foreground">Servings</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Flame className="h-5 w-5 mb-2 text-primary" />
                  <p className="text-sm font-medium">{recipe.calories}</p>
                  <p className="text-xs text-muted-foreground">Calories</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <ChefHat className="h-5 w-5 mb-2 text-primary" />
                  <p className="text-sm font-medium">{recipe.difficulty}</p>
                  <p className="text-xs text-muted-foreground">Level</p>
                </CardContent>
              </Card>
            </div>

            {/* Ingredients */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <div className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p>{instruction}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Similar Recipes */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Similar Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockRecipes
              .filter((r) => r.category === recipe.category && r.id !== recipe.id)
              .slice(0, 3)
              .map((similarRecipe) => (
                <Link key={similarRecipe.id} href={`/recipes/${similarRecipe.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <img
                      src={similarRecipe.image}
                      alt={similarRecipe.title}
                      className="w-full h-40 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-1">
                        {similarRecipe.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {similarRecipe.cookTime}m
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {similarRecipe.difficulty}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
