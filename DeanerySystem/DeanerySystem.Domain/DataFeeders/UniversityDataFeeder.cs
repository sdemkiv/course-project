﻿using System.Collections.Generic;
using DeanerySystem.Domain.Entities;

namespace DeanerySystem.Domain.DataFeeders
{
    public class UniversityDataFeeder: AbstractDataFeeder<University>
    {
        public UniversityDataFeeder(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
            this.data = new List<University>()
            {
                new University()
                {
                    Id = 1,
                    Name = "ЛНУ імені Івана Франка"
                }
            };
        }
    }
}