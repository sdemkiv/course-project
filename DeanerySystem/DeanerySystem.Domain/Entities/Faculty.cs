﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DeanerySystem.Domain.Entities.Abstract;

namespace DeanerySystem.Domain.Entities
{
    public class Faculty : IIdentifiableEntity<int>
    {
        public int Id { get; set; }
        public string Name { get; set; }

	    public virtual University University { get; set; }
        public virtual Professor Dean { get; set; }
        public virtual ICollection<Stream> Streams { get; set; }
        public Faculty()
        {
            this.Streams = new List<Stream>();
        }
    }
}
