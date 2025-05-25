
    import React from 'react';
    import { motion } from 'framer-motion';
    import { cn } from '@/lib/utils';

    const Section = ({ children, className, id, title, subtitle, titleClassName, subtitleClassName, contentClassName }) => {
      return (
        <motion.section
          id={id}
          className={cn('py-12 md:py-20', className)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {title && (
              <motion.h2
                className={cn('text-3xl md:text-4xl font-bold text-center mb-4 gradient-text', titleClassName)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.1 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className={cn('text-lg text-itve-gray-dark text-center mb-10 md:mb-16 max-w-3xl mx-auto', subtitleClassName)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay:0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            <div className={cn(contentClassName)}>
              {children}
            </div>
          </div>
        </motion.section>
      );
    };

    export default Section;
  