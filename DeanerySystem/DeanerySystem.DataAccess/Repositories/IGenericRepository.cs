﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DeanerySystem.DataAccess.Repositories
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "");
        TEntity GetById(object id);
        void Insert(TEntity entity);
        void Update(TEntity entityToUpdate);
        void Delete(object id);
        void Delete(TEntity entityToDelete);
    }
}
