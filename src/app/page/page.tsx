"use client"

import { useEffect, useState } from 'react';

import apiClient from '../../../lib/axios/interceptor/instance';
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonType[];
}

export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
  other?: OtherSprites;
  versions?: { [key: string]: { [key: string]: Sprites } };
}

export interface OtherSprites {
  dream_world?: { front_default?: string; front_female?: string };
  home?: {
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  official_artwork?: { front_default?: string };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export default function Page() {
  const [data, setData] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<Pokemon>("/1");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <h1>포켓몬 정보</h1>
      {data ? (
        <div>
          <h2>{data.name.toUpperCase()}</h2>
          <img src={data.sprites.front_default} alt={data.name} />
          <p>키: {data.height / 10}m</p>
          <p>몸무게: {data.weight / 10}kg</p>
          <p>경험치: {data.base_experience}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
