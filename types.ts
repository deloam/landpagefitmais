
import React from 'react';

export interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Product {
  image: string;
  name: string;
  category: string;
}

export interface Client {
  logo: string;
  name: string;
}
