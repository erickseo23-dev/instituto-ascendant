import { useEffect, useState } from 'react';
import { setSEOMetadata } from '@/config/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { ShoppingCart, BookOpen, Zap, Heart, Filter } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: 'curso' | 'libro' | 'meditacion' | 'retiro';
  price: number;
  image: string;
  description: string;
  instructor?: string;
  duration?: string;
}

export default function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  useEffect(() => {
    setSEOMetadata({
      title: 'Tienda | Instituto Ascendant',
      description: 'Compra cursos, libros, meditaciones guiadas y acceso a retiros del Instituto Ascendant.',
      keywords: ['tienda', 'cursos', 'libros', 'meditaciones', 'comprar'],
      type: 'website',
    });
    window.scrollTo(0, 0);
  }, []);

  const products: Product[] = [
    // Cursos
    {
      id: 'ma-nivel-1',
      title: 'Meditación Ascendente - Nivel 1',
      category: 'curso',
      price: 297,
      image: '🧘',
      description: 'Introducción a la Meditación Ascendente. Aprende las bases de la presencia consciente.',
      instructor: 'Claribel Puga',
      duration: '8 semanas',
    },
    {
      id: 'ma-nivel-2',
      title: 'Meditación Ascendente - Nivel 2',
      category: 'curso',
      price: 397,
      image: '✨',
      description: 'Profundización en la expansión de consciencia. Fase extrínseca y conexión colectiva.',
      instructor: 'Claribel Puga',
      duration: '10 semanas',
    },
    {
      id: 'ks-healing-basico',
      title: 'KS Healing - Nivel Básico',
      category: 'curso',
      price: 447,
      image: '💚',
      description: 'Fundamentos de la sanación energética KS. Aprende a canalizar la energía crística.',
      instructor: 'YOHEV',
      duration: '12 semanas',
    },
    // Libros
    {
      id: 'libro-consciencia',
      title: 'La Consciencia Crística',
      category: 'libro',
      price: 29.99,
      image: '📖',
      description: 'Guía práctica para entender y vivir desde la consciencia crística.',
      instructor: 'YOHEV',
    },
    {
      id: 'libro-meditacion',
      title: 'Meditación Ascendente - Guía Completa',
      category: 'libro',
      price: 34.99,
      image: '📚',
      description: 'Manual detallado con técnicas, ejercicios y reflexiones sobre la práctica.',
      instructor: 'Claribel Puga',
    },
    // Meditaciones
    {
      id: 'med-presencia',
      title: 'Meditación de Presencia Consciente',
      category: 'meditacion',
      price: 9.99,
      image: '🎧',
      description: 'Meditación guiada de 20 minutos para cultivar presencia en el momento.',
      duration: '20 min',
    },
    {
      id: 'med-energia',
      title: 'Activación de Energía Isiaca',
      category: 'meditacion',
      price: 14.99,
      image: '⚡',
      description: 'Meditación para conectar con la energía femenina divina.',
      duration: '30 min',
    },
    // Retiros
    {
      id: 'retiro-sagrado',
      title: 'Retiro Sagrado - El Niño que Habita en Ti',
      category: 'retiro',
      price: 197,
      image: '🌟',
      description: 'Retiro inmersivo online de 4 horas con YOHEV para sanar el niño interior.',
      duration: '4 horas',
    },
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'todos', label: 'Todos', icon: ShoppingCart },
    { id: 'curso', label: 'Cursos', icon: BookOpen },
    { id: 'libro', label: 'Libros', icon: BookOpen },
    { id: 'meditacion', label: 'Meditaciones', icon: Zap },
    { id: 'retiro', label: 'Retiros', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-4 py-6 pt-20">
        <Breadcrumbs items={[{ label: 'Tienda' }]} />
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Tienda Ascendant
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Acceso a cursos, libros, meditaciones guiadas y retiros transformadores.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-700'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Productos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all overflow-hidden">
              {/* Imagen */}
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              {/* Contenido */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3 capitalize">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 text-sm text-gray-500 mb-4 pb-4 border-t border-gray-100">
                  {product.instructor && <p className="pt-4"><strong>Instructor:</strong> {product.instructor}</p>}
                  {product.duration && <p><strong>Duración:</strong> {product.duration}</p>}
                </div>

                {/* Precio y CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-700">
                    ${product.price}
                  </span>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
