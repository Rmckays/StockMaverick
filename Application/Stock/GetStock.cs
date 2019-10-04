using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Application.Stock
{
    public class GetStock
    {
        public class Query : IRequest<Stock>
        {
            public string Symbol { get; set; }
        }

        public class Handler : IRequest<Query, Stock>
        {

            public Handler()
            {
                
            }
            
            public async Task<Stock> Handle(Query request, CancellationToken cancellationToken)
            {
                var stock = await 
            
            }
            
        }
    }
}