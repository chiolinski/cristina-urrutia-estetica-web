/** Recorte visual de las capturas aportadas: solo retratos de la profesional. */
export function InstagramPortrait({variant='clinic', className='', eager=false}:{variant?:'clinic'|'consultation';className?:string;eager?:boolean}) {
 return <div className={`instagram-portrait portrait-${variant} ${className}`}><img src="/instagram-publicaciones.png" alt={variant==='clinic'?'Cristina Urrutia junto a la identidad de su consulta, fotografía de su Instagram':'Cristina Urrutia en su espacio de atención, fotografía de su Instagram'} width="1477" height="608" loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async"/></div>;
}
